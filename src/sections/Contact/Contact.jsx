import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="https://formsubmit.co/kaleganesh3611@gmail.com" method="POST">
  <div className="formGroup">
    <input type="text" name="name" placeholder="Name" required />
  </div>
  <div className="formGroup">
    <input type="email" name="email" placeholder="Email" required />
  </div>
  <div className="formGroup">
    <textarea name="message" placeholder="Message" required></textarea>
  </div>

  {/* Optional hidden fields */}
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_next" value="https://your-redirect-url.com/thank-you" />

  <input className="hover btn" type="submit" value="Submit" />
</form>

    </section>
  );
}

export default Contact;
