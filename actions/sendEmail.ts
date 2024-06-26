'use server';

import { Resend } from "resend";

const resend = new Resend('re_azhDvqqp_RX8eVMGDFtVShmqcutgFSKoZ');

const validateString = (value : unknown) => {
    if (!value || typeof(value) !== 'string'){
        return false;
    }
    return true;
};

const getErrorMessage = (error: unknown):string => {
    let message: string;
    if (error instanceof Error){
        message = error.message; 
    }else if (error && typeof(error) === 'object' && 'message' in error ){
        message = error.message as string;
    }else if (typeof(error) === 'string'){
        message = error;
    }else{
        message = "An unknown error occurred";
    }
    return message;
}

export const sendEmail = async (formData: FormData) => {
    'use server';    
    const message = formData.get('senderMessage');
    const senderEmail = formData.get('senderEmail');

    if (!validateString(senderEmail)){
        return {
            error: "Invalid email"
        }
    }

    if (!validateString(message)){
        return {
            error: "Invalid message"
        }
    }

    try{
        await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to : "santosh.naralaa@gmail.com",
            subject : "Message from Portfolio",
            reply_to : senderEmail as string,
            text : message as string
        })
    }
    catch (error : unknown){
        console.log(error);
        return{
            error : getErrorMessage(error)
        }
    }
}