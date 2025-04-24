import { useDispatch, useSelector } from "react-redux";
import {
  addStream,
  deleteStream,
  editStream,
} from "../../store/slices/chartDataSlice";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const useFormController = () => {
  const { dataStreams } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    id: null,
    from: "",
    to: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, incoming, outgoing, amount } = formData;
    if (id) {
      dispatch(
        editStream({
          id,
          newFlow: { incoming, outgoing, amount: Number(amount) },
        })
      );
    } else {
      dispatch(addStream({ incoming, outgoing, amount: Number(amount) }));
    }
    setFormData({ id: null, incoming: "", outgoing: "", amount: "" });
  };

  const handleEdit = (id) => {
    const flow = dataStreams.find((f) => f.id === id);
    setFormData({
      id: flow.id,
      incoming: flow.incoming,
      outgoing: flow.outgoing,
      amount: flow.amount,
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteStream(id));
  };

  return {
    handleEdit,
    handleDelete,
    dataStreams,
    t,
    handleSubmit,
    formData,
    setFormData,
  };
};
