import React from "react";
import "./Contact.css"

function Contact() {
    return (
        <div className="contact">
            <form action="https://formspree.io/f/mrbpzpoj" method="POST">
                <input type="text"  placeholder="Enter your name..." name="username" required/>
                <input type="email"  placeholder="email" name="email" required/>
                <textarea name="message" placeholder="message" required ></textarea>
                <button>submit</button>

            </form>

        </div>
    )
}
export default Contact