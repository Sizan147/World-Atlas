export const Contact = () => {
  const handleFormSubmit = (formData)=>{
    const formInputData = Object.fromEntries(formData.entries())
    console.log(formInputData)
  }

  return (
    <>
      <section className="contact-section container"> 
        <h3>Contact Us</h3>
        <form action={handleFormSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" required autoComplete="off" name="name" placeholder="Name?"/>
          <label htmlFor="email"  >Email</label>
          <input type="email" placeholder="Enter your email" required autoComplete="off" name="email" />
          <label htmlFor="message" >Message</label>
          <textarea rows="10" placeholder="Your message...." required autoComplete="off" name="message" />
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
};
