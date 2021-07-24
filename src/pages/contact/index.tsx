import { Box, Container,Heading, Input, Text, Textarea, Button } from "@chakra-ui/react";
import { useState } from "react";
import Head from "next/head";
import { GoogleReCaptchaProvider,
  GoogleReCaptcha } from 'react-google-recaptcha-v3';
import {
    Alert,
    AlertIcon,
    AlertDescription,
  } from "@chakra-ui/react"
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Stats from "../../components/Stats/Stats";
import es from "../../locales/es";
import axios from "axios";
const Contact=()=>{
    const [status,setStatus]=useState<"pending"|"busy"|"error"|"success">("pending");
    const [error,setError]=useState<string>("");
    const [name,setName]=useState<string>("");
    const [email,setEmail]=useState<string>("");
    const [message,setMessage]=useState<string>("");
    const [captcha,setCaptcha]=useState<string>("");
    const {
        home: {
          head: { headTitle, headDescription },
          hero,
          stats,
          footer,
        },
      } = es;
  
    const renderAlert=()=>{
        return <Alert status={status as "error"|"success"} marginBottom={5}>
        <AlertIcon />
        <AlertDescription>{status==="error"?error:"Su mensaje ha sido recibido, muchas gracias. / Your message has been received, thank you!"}</AlertDescription>
      </Alert>;
    }
    const sendMessage=async ()=>{
        if(!name) {
            setStatus("error");
            return setError("Por favor escriba su nombre. / Please enter your name.");
        } else if(!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i.test(email)) {
            setStatus("error");
            return setError("Por favor escriba su dirección de correo electrónico. / Please enter a valid Email Address.");
        } else if(!message) {
            setStatus("error");
            return setError("Por favor escriba su mensaje. / Please enter your message.");
        } else if(!captcha)  {
          setStatus("error");
          return setError("Por favor solucione el challenge. / Please solve the captcha challenge.");
        }else {
            setStatus("busy");
            try {
              /**
               * This should come from a .env, leaving it here for the time being.
               */
                await axios.post(process.env.NEXT_PUBLIC_CONTACT_API || "",{
                    "Nombre/Name":name,
                    "Correo Electrónico/Email":email,
                    "Mensaje/Message":message,
                    captcha
                });
                return setStatus("success");
            } catch(error) {
                setStatus("error");
                return setError("Ocurrió un error al intentar enviar su mensaje. Intente nuevamente. / There has been an error, please try again.");
            }
        }
        
    }


    return (
      <Box backgroundColor="brand.bgWhite">
    <Head>
      <title>{headTitle}</title>
      <meta name="description" content={headDescription} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Hero translations={hero} />
      <Stats translations={stats} />
      <main style={{
      backgroundImage: "url(/background-image.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }} >
      <Container colorScheme="orange" paddingTop={30} paddingBottom={30} >
      <Box
      backgroundColor="white"
      px={10}
      py={10}
      boxShadow="brand.whiteShadow"
      borderRadius={8}
      width="full"
      id="contact"
    >
        <Heading marginBottom={10}>Contact / Contacto</Heading>
        <Text fontSize="2xl">Su Nombre / Your Name</Text>
        <Input disabled={status==="busy" || status==="success"} name="name" onChange={e=>setName(e.target.value)} placeholder="Escriba su nombre / Enter your Name" marginBottom={5} />
        <Text fontSize="2xl">Su Correo Electrónico / Your Email</Text>
        <Input disabled={status==="busy" || status==="success"} type="email" onChange={e=>setEmail(e.target.value)} name="email" placeholder="Escriba su Correo Electrónico / Enter your Email" marginBottom={5} />
        <Text fontSize="2xl">Su Mensaje / Your Message</Text>
        <Textarea disabled={status==="busy" || status==="success"} name="message" onChange={e=>setMessage(e.target.value)} placeholder="Escriba su mensaje / Enter your Message" marginBottom={5} />
        {(status==="error"||status==="success") && renderAlert()}
        {(status!=="success") && <Button onClick={sendMessage} disabled={status==="busy"} colorScheme="blue">{status==="busy"?"Wait please / Espere por favor...":"Enviar mensaje / Send Message"}</Button>}
      </Box>
    </Container>
    <GoogleReCaptcha onVerify={token=>setCaptcha(token)} />
    </main>
      <Footer translations={footer} />
</Box>
    );
}

const ContactPage=()=>(
  <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}>
    <Contact />
  </GoogleReCaptchaProvider>
);

export default ContactPage;