import { useFormik } from "formik";
import { createForm } from "../../../../utils/formik";
import IUseCarCardLogicsTypes, { IUseCarCardForm } from "./types";
import { IUseCarCardLogicsProps } from "./props";

export const useCarCardLogic = (
  props: IUseCarCardLogicsProps
): IUseCarCardLogicsTypes => {
  const { values, ...rest } = useFormik<IUseCarCardForm>({
    initialValues: {
      carId: props.carId,
      email: "",
      phoneNumber: "",
      startRentDate: new Date(),
      endRentDate: new Date(),
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validateOnChange: false,
  });

  const form = createForm(values, rest);
  return { form };
};
