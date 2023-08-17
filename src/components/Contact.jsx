import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_q5hgvcf",
        "template_6sxtfor",
        {
          from_name: form.name,
          to_name: "Eugene",
          from_email: form.email,
          to_email: "kimuandr@gmail.com",
          message: form.message,
        },
        "doPhdOtF5_jZwbbeC"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I'll get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong...");
        }
      );
  };

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      {/* <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mt-12"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name?"
              className="px-6 py-4 font-medium text-white border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your email</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email?"
              className="px-6 py-4 font-medium text-white border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Do you want to say anything?"
              className="px-6 py-4 font-medium text-white border-none rounded-lg bg-tertiary placeholder:text-secondary outlined-none"
            />
          </label>
          <button
            className="px-8 py-3 font-bold text-white shadow-md outline-none bg-tertiary w-fit shadow-primary rounded-xl"
            type="submit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div> */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
