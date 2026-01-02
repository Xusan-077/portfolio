import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const schema = yup
    .object({
      name: yup.string().required("Ismingizni kiriting"),
      email: yup
        .string()
        .email("To'g'ri email kiriting")
        .matches(/@gmail\.com$/, "Faqat @gmail.com ruxsat etiladi")
        .required("Email shart"),
      phone: yup.string().required("Telefon raqam shart"),
      details: yup
        .string()
        .required("Xabarni yozing")
        .min(10, "Kamida 10 ta belgi bo'lishi kerak"),
    })
    .required();

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendEmail = (data: any) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        formRef.current?.reset();
        toast.success("Xabar muvaffaqiyatli yuborildi!");
      })
      .catch(() => {
        toast.error("Xabar yuborishda xatolik yuz berdi!");
      });
  };

  const onError = () => {
    setTimeout(() => {
      clearErrors();
    }, 5000);
  };

  const inputClass = (errorName: any) => `
    bg-[#1B1B1BFF] w-full outline-none pl-6 rounded-lg placeholder:text-[#959595] text-gray-300 border transition-all duration-300
    ${
      errorName
        ? "error-shake border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]"
        : "border-transparent focus:border-[#FD6F00]"
    }
  `;

  return (
    <section id="contact" className=" scroll-mt-30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-30 max-[768px]:mb-25">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#FEFEFE] mb-4">
              Contact Me
            </h2>
            <p className="text-base md:text-[20px] font-medium text-[#707070] max-w-2xl">
              Cultivating Connections: Reach Out and Connect with Me
            </p>
          </div>

          <div className="w-full max-w-[1030px]">
            <form
              ref={formRef}
              onSubmit={handleSubmit(sendEmail, onError)}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2">
                <div className="flex flex-col">
                  <input
                    className={`${inputClass(errors?.name)} h-14`}
                    placeholder="Name"
                    {...register("name")}
                  />
                  <p className="text-red-500 text-sm mt-1 h-5 pl-2">
                    {errors?.name?.message}
                  </p>
                </div>
                <div className="flex flex-col">
                  <input
                    className={`${inputClass(errors?.email)} h-14`}
                    placeholder="Email"
                    {...register("email")}
                  />
                  <p className="text-red-500 text-sm mt-1 h-5 pl-2">
                    {errors?.email?.message}
                  </p>
                </div>
                <div className="flex flex-col">
                  <input
                    className={`${inputClass(errors?.phone)} h-14`}
                    placeholder="Phone number"
                    {...register("phone")}
                  />
                  <p className="text-red-500 text-sm mt-1 h-5 pl-2">
                    {errors?.phone?.message}
                  </p>
                </div>
                <div className="flex flex-col">
                  <textarea
                    className={`${inputClass(
                      errors?.details
                    )} pt-4 min-h-[160px] resize-none`}
                    placeholder="Project Details"
                    {...register("details")}
                  />
                  <p className="text-red-500 text-sm mt-1 h-5 pl-2">
                    {errors?.details?.message}
                  </p>
                </div>
              </div>
              <div className="flex justify-center md:justify-end mt-4">
                <button
                  className="w-full md:w-auto border-2 border-[#959595] rounded-lg text-[#959595] text-[18px] md:text-[20px] font-semibold px-12 py-3 hover:bg-[#FD6F00] hover:text-white hover:border-[#FD6F00] transition-all duration-300"
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
