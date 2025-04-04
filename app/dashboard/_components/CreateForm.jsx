"use client"
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { AiChatSession } from '@/configs/AiModal'
import { useUser } from '@clerk/nextjs'
import { db } from '@/configs'
import { JsonForms } from '@/configs/schema'
import moment from 'moment/moment'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { desc, eq } from 'drizzle-orm'

const PROMPT=",On Basis of description create JSON form with formTitle, formHeading along with fieldName, FieldTitle,FieldType, Placeholder, label , required fields, and checkbox and select field type options will be in array only and in JSON format"
function CreateForm() {
    const [openDialog,setOpenDailog]=useState(false)
    const [userInput,setUserInput]=useState();
    const [loading,setLoading]=useState();
    const {user}=useUser();
    const route=useRouter();
 
    const [formList,setFormList]=useState();
  
    useEffect(()=>{
        user&&GetFormList()
    },[user])

    const GetFormList=async()=>{
        const result=await db.select().from(JsonForms)
        .where(eq(JsonForms.createdBy,user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(JsonForms.id));

        setFormList(result);
    }

    const onCreateForm=async()=>{
        if(formList?.length==3)
        {
            toast('Upgrade to create unlimted form')
            return;
        }
        setLoading(true)
        try {
            const result = await AiChatSession.sendMessage("Description:"+userInput+PROMPT);
            const responseText = result.response.text();
            
            // Parse the response to ensure it's valid JSON
            const parsedJson = JSON.parse(responseText);
            
            if(parsedJson) {
                const resp = await db.insert(JsonForms)
                    .values({
                        jsonform: JSON.stringify(parsedJson), // Store as stringified JSON
                        createdBy: user?.primaryEmailAddress?.emailAddress,
                        createdAt: moment().format('DD/MM/yyyy')
                    }).returning({id: JsonForms.id});

                console.log("New Form ID", resp[0].id);
                if(resp[0].id) {
                    route.push('/edit-form/'+resp[0].id)
                }
            }
        } catch (error) {
            console.error('Error creating form:', error);
            toast('Error creating form. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='dark:text-white'>
            <Button  className='dark:text-white' onClick={()=>setOpenDailog(true)}>+ Create Form</Button>
            <Dialog open={openDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create new form </DialogTitle>
                        <DialogDescription>
                            <Textarea className="my-2" 
                                onChange={(event)=>setUserInput(event.target.value)}
                                placeholder="Write descrition of your form"/>
                            <div className='flex gap-2 my-3 justify-end'>
                                <Button 
                                    onClick={()=>setOpenDailog(false)}
                                    variant="destructive">Cancel</Button>
                                <Button 
                                    disabled={loading}
                                    onClick={()=>onCreateForm()}>
                                    {loading?
                                        <Loader2 className='animate-spin' />:'Create'    
                                    }
                                </Button>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CreateForm