import { Controller, useForm } from "react-hook-form";
import { CiUser, CiLock } from "react-icons/ci";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/dashboard");
  };
  return (
    <div className="w-[57%] z-[1000] bg-white rounded-lg  px-10 py-16">
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-3"
      >
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => {
            return (
              <div className="flex flex-col gap-2">
                <label className="text-whiteTheme-darkOrange text-base font-normal">
                  Email
                </label>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                    className={`!border-2 !border-slate-300 !pl-12`}
                  />
                  <div
                    className="absolute inset-y-0 left-0 pl-3 
                    flex items-center 
                    pointer-events-none"
                  >
                    <CiUser size={25} className="text-yellow-600" />
                  </div>
                </div>
              </div>
            );
          }}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => {
            return (
              <div className="flex flex-col gap-2">
                <label className="text-whiteTheme-darkOrange text-base font-normal">
                  Password
                </label>
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="Your password"
                    {...field}
                    className={`!border-2 !border-slate-300 !pl-12`}
                  />
                  <div
                    className="absolute inset-y-0 left-0 pl-3 
                    flex items-center 
                    pointer-events-none"
                  >
                    <CiLock size={25} className="text-yellow-600" />
                  </div>
                </div>
              </div>
            );
          }}
        />
        <div className="pt-3">
          <Button
            type="submit"
            value={"Login"}
            className=" text-lg font-normal"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
