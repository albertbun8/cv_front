import { useState, type ChangeEvent, type SubmitEvent } from "react"

function ContactForm(){
    const [form, setForm] = useState({name: "", email: "", message: ""})

    function handleChange(e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
        const {name, value} = e.target
        setForm(prev => ({...prev, [name]: value}))
    }

    function handleSubmit(e: SubmitEvent<HTMLFormElement>){
        e.preventDefault()

        console.log(form)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name : </label>
                <input id="name" name="name" onChange={handleChange} value = {form.name} />
            </div>

            <div>
                <label htmlFor="email">Email : </label>
                <input id="email" name="email" type="email" onChange={handleChange} value={form.email}/>
            </div>

            <div>
                <label htmlFor="message">Message : </label>
                <textarea id="message" name="message" onChange={handleChange} value={form.message}/>
            </div>

            <button type="submit">Send</button>
        </form>
    )
}

export default ContactForm