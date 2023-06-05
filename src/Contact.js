import { colors } from "@mui/material";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">CONTACT US</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.708902158579!2d77.54846677494265!3d12.926421687384815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f5d3782d153%3A0xd7e69bd48dadabc8!2sGopalan%20Coworks%2CBanashankari!5e0!3m2!1sen!2sin!4v1683894142561!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="" method="POST" className="contact-inputs">
            <input type="text" placeholder="username" name="username" required autoComplete="off"/>
           
            <input type="email" placeholder="email" name="email" required autoComplete="off"/>
            
            <textarea name="Message" cols="30" rows="10" required autoComplete="off" placeholder="Enter your message"></textarea>
            <input type="submit"  value="send"  style={{backgroundColor:"rgb(98 84 243)",color:"white"}} />
          </form>
        </div>

      </div>
    </Wrapper>
  );
};

export default Contact;
