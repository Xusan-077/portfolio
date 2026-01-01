import emailjs from "emailjs-com";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef } from "react";

interface IEmail {
  name?: string;
  email?: string;
  phone?: string;
  details?: string;
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const schema = yup
    .object({
      name: yup.string().required(),
      email: yup
        .string()
        .matches(/@gmail\.com$/)
        .required(),
      phone: yup.string().required(),
      details: yup.string().required().min(10),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendEmail = (data: any) => {
    emailjs
      .send("service_42yfqxp", "template_i83tc1h", data, "0U920l3Dk5Daen-m-")
      .then(() => {
        formRef.current?.reset();
        alert("Email muvaffaqiyatli yuborildi!");
      })
      .catch((err) => {
        console.error(err);
        alert("Xatolik yuz berdi");
      });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="flex flex-col items-center pt-8 mb-30">
          <div className="mb-12.5">
            <h2 className="text-[40px] text-center font-bold text-[#FEFEFE]">
              Contact Me
            </h2>
            <p className="text-[20px] font-medium text-[#707070] text-center">
              Cultivating Connections: Reach Out and Connect with Me
            </p>
          </div>
          <div className="">
            <form ref={formRef} onSubmit={handleSubmit(sendEmail)} className="">
              <div className="grid grid-cols-[500px_500px] gap-7.5 mb-7.5">
                <label>
                  <input
                    className="bg-[#1B1B1BFF] max-w-125 w-full outline-none h-13.5 pl-6 rounded-lg placeholder:text-[#959595] text-gray-300"
                    placeholder="Name"
                    {...register("name")}
                  />
                  <p className="text-red-500 pl-4 mt-2 h-4">
                    {errors?.name?.message}
                  </p>
                </label>
                <label>
                  <input
                    className="bg-[#1B1B1BFF] max-w-125 w-full outline-none h-13.5 pl-6 rounded-lg placeholder:text-[#959595] text-gray-300"
                    placeholder="Email"
                    {...register("email")}
                  />
                  <p className="text-red-500 pl-4 mt-2 h-4">
                    {errors?.email?.message}
                  </p>
                </label>
                <label>
                  <input
                    className="bg-[#1B1B1BFF] max-w-125 w-full outline-none h-13.5 pl-6 rounded-lg placeholder:text-[#959595] text-gray-300"
                    placeholder="Phone number"
                    {...register("phone")}
                  />
                  <p className="text-red-500 pl-4 mt-2 h-4">
                    {errors?.phone?.message}
                  </p>
                </label>
                <label>
                  <textarea
                    className="bg-[#1B1B1BFF] max-w-125 pt-3.5 outline-none resize-none w-full min-h-40 pl-6 rounded-lg placeholder:text-[#959595] text-gray-300"
                    placeholder="Project Details must be min 10 words"
                    {...register("details")}
                  />
                  <p className="text-red-500 pl-4 mt-2 h-4">
                    {errors?.details?.message}
                  </p>
                </label>
              </div>
              <div className="flex justify-end">
                <button
                  className="border-2 cursor-pointer border-[#959595] rounded-lg text-[#959595] text-[20px] font-semibold p-[12px_40px]"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
