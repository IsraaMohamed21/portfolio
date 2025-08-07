export default function ContactForm() {
  return (
    <div>
        <form
          action="https://formspree.io/f/mrblogdg"
      method="POST"
        >
            <label>Your email</label><br/>
            <input type="email" placeholder="noh54@gmail.com" name="email" required/><br/>
            <label>message</label><br/>
            <textarea placeholder="Let's talk about..." name="message" required/><br/>
            <button type="submit">Send Message</button>
        </form>
    </div>
  )
}
