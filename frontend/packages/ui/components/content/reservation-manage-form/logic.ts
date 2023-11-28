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
        process.env.NEXT_PUBLIC_BACKEND_URL + "/api/rent/reservation",
        reservationNumber
      );

      return response.data as RentDTO;
    },
    {
      onError: () => {
        useToast({
          title: "Reservation not found",
          type: AlertType.ERROR,
        });
      },
    }
  );

  const deleteMutation = useMutation(
    (reservationNumber: RentBody) => {
      return axios.post(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/api/rent/reservation/delete",
        reservationNumber
      );
    },
    {
      onSuccess: () => {
        mutation.reset();
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
        onError: () => {
          useToast({
            title: "Canno't Delete Reservation",
            type: AlertType.ERROR,
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
