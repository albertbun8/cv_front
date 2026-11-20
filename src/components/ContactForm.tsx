import { useState, type ChangeEvent, type SubmitEvent } from "react"
import "./ContactForm.css"

type Status = "idle" | "sending" | "success" | "error"

const FORMSPREE_URL = "https://formspree.io/f/mwlonvvj"

function ContactForm(){
    const [form, setForm] = useState({name: "", email: "", message: ""})
    const [status, setStatus] = useState<Status>("idle")

    function handleChange(e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
        const {name, value} = e.target
        setForm(prev => ({...prev, [name]: value}))
    }

    async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault()

        setStatus("sending")
        try {
            const response = await fetch(FORMSPREE_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(form),
            })

            if (response.ok) {
                setStatus("success")
                setForm({name:"", email:"", message:""})
            } else {
                setStatus("error")
            }
        } catch {
            setStatus("error")
        }
    }

    return(
        <section className="container page-section" id="contact">
            <div className="contact-card">
                <div className="contact-intro">
                    <h2 className="section-title">Get in touch</h2>
                    <p>Have a role, a project or just a question? I usually reply within a day or two.</p>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-field">
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" onChange={handleChange} value = {form.name} required />
                    </div>

                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" onChange={handleChange} value={form.email} required/>
                    </div>

                    <div className="form-field">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" onChange={handleChange} value={form.message} required/>
                    </div>

                    <button className="btn-submit" type="submit" disabled={status === "sending"}>
                        {status === "sending" ? "Sending…" : "Send"}
                    </button>

                    {status === "success" && (
                        <p className="form-status is-success" role="status">Thanks! Your message was sent.</p>
                    )}

                    {status === "error" && (
                        <p className="form-status is-error" role="status">Something went wrong. Please try again or email me at albert.bunwork@gmail.com</p>
                    )}
                </form>
            </div>
        </section>
    )
}

export default ContactForm