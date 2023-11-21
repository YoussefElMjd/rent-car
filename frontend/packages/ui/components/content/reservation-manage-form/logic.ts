import { useFormik } from "formik";
import { createForm } from "../../../../utils/formik";
import IUseReservationManageFormLogicsTypes, {
  IUseReservationManageForm,
  RentBody,
  RentResponseData,
} from "./types";
import { UseMutationResult, useMutation } from "react-query";
import axios from "axios";
import { useEffect } from "react";

export default function useReservationManageFormLogics(): IUseReservationManageFormLogicsTypes {
  const mutation: UseMutationResult<RentResponseData, unknown, RentBody> =
    useMutation(async (reservationNumber: RentBody) => {
      const response = await axios.post(
        "http://localhost:8080/api/rent/reservation",
        reservationNumber
      );

      return response.data as RentResponseData;
    });

  const deleteMutation = useMutation(
    (reservationNumber: RentBody) => {
      return axios.post(
        "http://localhost:8080/api/rent/reservation/delete",
        reservationNumber
      );
    },
    {
      onSuccess: () => {
        mutation.mutate({ reservationNumber: values.reservationNumber });
        form.reservationNumber.onChange("");
      },
    }
  );

  const deleteReservation = () => {
    deleteMutation.mutate({ reservationNumber: values.reservationNumber });
  };
  const { values, ...rest } = useFormik<IUseReservationManageForm>({
    initialValues: {
      reservationNumber: "",
    },
    onSubmit: (values) => {
      mutation.mutate({ reservationNumber: values.reservationNumber });
    },
    validateOnChange: false,
  });
  const form = createForm(values, rest);
  return { form, rentData: mutation.data, deleteReservation };
}
