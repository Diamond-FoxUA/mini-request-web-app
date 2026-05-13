import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppStore } from "../../../store/useAppStore";
import type { AppState } from "../../../store/types";
import Button from "../../../components/Button";

const requestSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
  description: Yup.string()
    .min(10, "Too short!")
    .max(200, "Too long!")
    .required("Required!"),
});

type RequestFormProps = {
  onClose: () => void;
  id?: string;
};

export default function RequestForm({ onClose, id }: RequestFormProps) {
  const { addRequest, editRequest } = useAppStore();

  const request = useAppStore((state: AppState) =>
    id ? state.requests.find((req) => req.id === id) : undefined,
  );

  const isEditMode = Boolean(id);

  const initialValues = {
    title: request?.title ?? "",
    description: request?.description ?? "",
  };

  const handleSubmit = (values: { title: string; description: string }) => {
    const { title, description } = values;

    if (isEditMode && id) {
      editRequest(id, title, description);
    } else {
      addRequest(title, description);
    }

    onClose();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={requestSchema}
      enableReinitialize={true}
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col gap-5 w-86">
        <div className="flex flex-col gap-2">
          <label
            className="text-slate-800 text-[18px] cursor-pointer"
            htmlFor="title"
          >
            Title
          </label>
          <Field
            className="border-2 rounded-2xl px-4 py-2 border-slate-500 bg-slate-100"
            name="title"
            id="title"
          />
          <ErrorMessage
            name="title"
            component="span"
            className="text-rose-500 text-sm font-medium pl-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            className="text-slate-800 text-[18px] cursor-pointer"
            htmlFor="description"
          >
            Description
          </label>
          <Field
            as="textarea"
            className="resize-none h-24 border-2 rounded-2xl px-4 py-2 border-slate-500 bg-slate-100"
            name="description"
            id="description"
          />
          <ErrorMessage
            name="description"
            component="span"
            className="text-rose-500 text-sm font-medium pl-2"
          />
        </div>

        <Button type="submit">
          {isEditMode ? "Save Changes" : "Create Request"}
        </Button>
      </Form>
    </Formik>
  );
}
