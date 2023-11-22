import { useFormik } from "formik";
import { createForm } from "../../../../utils/formik";
import IUseReservationManageFormLogicsTypes, {
  IUseReservationManageForm,
  RentBody,
} from "./types";
import { UseMutationResult, useMutation } from "react-query";
import axios from "axios";
import RentDTO from "../../../../dto/rent-dto";
import { AlertType } from "../../../logics/useToast/types";
import useToast from "../../../logics/useToast/logic";

export default function useReservationManageFormLogics(): IUseReservationManageFormLogicsTypes {
  const mutation: UseMutationResult<RentDTO, unknown, RentBody> = useMutation(
    async (reservationNumber: RentBody) => {
      const response = await axios.post(
        "http://localhost:8080/api/rent/reservation",
        reservationNumber
      );

      return response.data as RentDTO;
    }
  );

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
    deleteMutation.mutate(
      { reservationNumber: values.reservationNumber },
      {
        onSuccess: () => {
          useToast({
            title: "Car Rental Successfully Withdrawn",
            type: AlertType.SUCCESS,
          });
        },
      }
    );
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
