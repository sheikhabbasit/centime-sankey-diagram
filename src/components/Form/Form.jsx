import React from "react";
import styles from "./Form.module.css";
import { useFormController } from "./form.controller";

const Form = () => {
  const {
    handleEdit,
    handleDelete,
    dataStreams,
    t,
    handleSubmit,
    formData,
    setFormData,
  } = useFormController();

  return (
    <div className={styles.formContainer}>
      <ul className={styles.flowList}>
        {dataStreams.map((flow) => (
          <li key={flow.id}>
            <div>
              <span>
                <b>{t("income")}: </b>
                {t(flow.incoming)}
              </span>{" "}
              →{" "}
              <span>
                <b>{t("spent_on")}: </b>
                {t(flow.outgoing)}
              </span>
              <b>{" =>"}</b>
              <span>
                <b> Amount: </b>
                {flow.amount}
              </span>
            </div>
            <div className={styles.buttonGroup}>
              <button
                className={styles.editButton}
                onClick={() => handleEdit(flow.id)}
              >
                {t("edit")}
              </button>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(flow.id)}
              >
                {t("delete")}
              </button>
            </div>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder={t("from")}
          value={formData.incoming}
          onChange={(e) =>
            setFormData({ ...formData, incoming: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder={t("to")}
          value={formData.outgoing}
          onChange={(e) =>
            setFormData({ ...formData, outgoing: e.target.value })
          }
          required
        />
        <input
          type="number"
          placeholder="Amount"
          min={1}
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          required
        />
        <button type="submit">{formData.id ? t("edit") : t("add")}</button>
      </form>
    </div>
  );
};

export default Form;
