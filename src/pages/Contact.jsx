import React, { useContext, useEffect, useState } from "react";
import Header from '../components/Header'
import logo from '../logo.svg';
import '../App.css';
import Block from "../components/Block";    
import Footer from "../components/Footer";

const Contact = () => {
    const [hover, setHover] = useState(false)
    const access_key = process.env.REACT_APP_ACCESS_KEY 
    //  console.log(process.env)
    useEffect(() => {
        //console.log(access_key)
    }, []);

    function handleSubmit (e){
        const form = document.getElementById('form');
        const result = document.getElementById('result');
        e.preventDefault();
        
        console.log(form,result)
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        result.style.display = "";
        result.innerHTML = "Please wait..."
        
        console.log(json)
        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                console.log(json)
                if (response.status == 200) {
                    result.innerHTML = json.message;
                } else {
                    console.log(response);
                    result.innerHTML = json.message;
                }
            })
            .catch(error => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
            })
            .then(function() {
                form.reset();
                setTimeout(() => {
                    result.style.display = "none";
                }, 3000);
            });
    }
  
    return (
        <div  style={{ color:"#ffffff", textAlign:"center", width:"100%"}} >
            
            <Header/>
            <div style={{height:"20vh"}}></div>
            <div style={{ color:"#ffffff", fontSize:48, textAlign:"center" }}>
            Contact Me

            </div>
            <div>
                <div>
                    Test
                </div>
            </div>

            <Block style={{width:"55vw", minWidth:"350px", margin:"auto", textAlign:"left",paddingInline:"2.5vw", paddingTop:"2.5vh", display:"block", marginBlock:"5vh"}}>
                <form 
                id="form"
                action="https://api.web3forms.com/submit" 
                onSubmit={handleSubmit}
                method="POST"
                style={{
                    width:"50vw",
                    minWidth: "300px",
                    margin: '0 auto',
                    paddingBlock: '2rem',
                    justifyContent:"center",
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                >
                    <input 
                        type="hidden" 
                        name="access_key" 
                        value={access_key}
                    />

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#fff' }}>
                        Name
                        </label>
                        <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        required
                        style={{
                            width: '100%',
                            paddingBlock: '0.75rem',
                            border: '1px solid #e5e7eb',
                            borderRadius: '4px',
                            fontSize: '1rem'
                        }}
                        />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#fff' }}>
                        Email
                        </label>
                        <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                        style={{
                            width: '100%',
                            paddingBlock: '0.75rem',
                            border: '1px solid #e5e7eb',
                            borderRadius: '4px',
                            fontSize: '1rem'
                        }}
                        />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#fff' }}>
                        Message
                        </label>
                        <textarea
                        name="message"
                        placeholder="Your message"
                        required
                        style={{
                            width: '100%',
                            paddingBlock: '0.75rem',
                            border: '1px solid #e5e7eb',
                            borderRadius: '4px',
                            height: '150px',
                            fontSize: '1rem'
                        }}
                        />
                    </div>

                    <input 
                        type="checkbox" 
                        name="botcheck" 
                        style={{ display: 'none' }}
                    />

                    <button
                        type="submit"
                        onMouseEnter={()=>setHover(true)}
                        onMouseLeave={()=>setHover(false)}
                        style={{
                            width: '100%',
                        backgroundColor: hover?'#2563eb':'hsla(327, 0%, 15%, .7)',
                        color: 'white',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '4px',
                        border: 'none',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'background-color 0.5s',
                        }}
                    >
                        Send Message
                    </button>

                    <div id="result" style={{
                        marginTop: '1rem',
                        padding: '1rem',
                        borderRadius: '4px',
                    }}>
                    </div>
                </form>
            </Block>

            <Footer/>
        </div>
    );
};
  
export default Contact;
