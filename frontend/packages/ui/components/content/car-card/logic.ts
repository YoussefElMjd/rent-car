import { useFormik } from "formik";
import { createForm } from "../../../../utils/formik";
import IUseCarCardLogicsTypes, { IUseCarCardForm, RentBodyData } from "./types";
import { IUseCarCardLogicsProps } from "./props";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import moment from "moment";
import { getUnableDateRent } from "../../../../fetchers/rent";
import { AlertType } from "../../../logics/useToast/types";
import useToast from "../../../logics/useToast/logic";
export const useCarCardLogic = (
  props: IUseCarCardLogicsProps
): IUseCarCardLogicsTypes => {
  const mutation = useMutation(
    (newRent: RentBodyData) => {
      return axios.post("http://localhost:8080/api/add/rent", newRent);
    },
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const { values, ...rest } = useFormik<IUseCarCardForm>({
    initialValues: {
      carId: props.carId,
      email: "",
      phoneNumber: "",
      startDateRent: new Date(),
      endDateRent: new Date(),
    },
    onSubmit: (values) => {
      mutation.mutate(
        {
          car: { id: values.carId },
          email: values.email,
          phoneNumber: values.phoneNumber,
          startDateRent: moment(values.startDateRent).format("DD-MM-YYYY"),
          endDateRent: moment(values.endDateRent).format("DD-MM-YYYY"),
        },
        {
          onSuccess: () =>
            useToast({
              title: "Successfully Car Rental",
              type: AlertType.SUCCESS,
            }),
        }
      );
      form.email.onChange("");
      form.phoneNumber.onChange("");
      form.startDateRent.onChange(new Date());
      form.endDateRent.onChange(new Date());
    },
    validateOnChange: false,
  });

  const form = createForm(values, rest);
  const {
    data: unableDateRent,
    error,
    isLoading,
    refetch,
  } = useQuery(["id", form.carId], () => getUnableDateRent(form.carId?.value), {
    staleTime: Infinity,
  });

  return { form, unableDateRent, refetch };
};
