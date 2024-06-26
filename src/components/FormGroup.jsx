import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "./Button";
import Form from "./Form";
import FormRow from "./FormRow";
import Heading from "./Heading";
import Input from "./Input";
import Textarea from "./Textarea";
import toast from "react-hot-toast";

const BorderedDiv = styled.div`
  border: 1px solid var(--color-grey-500);
  padding: 0.7rem 1.2rem;
  border-radius: 10px;
  display: flex;
  gap: 20px;
`;

function FormGroup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    if (data)
      toast(`✅ Message Sent!
      Thanks for completing the form, we'll be in touch soon!
      `);
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Heading title="Contact Us" type="fullRow" />
        <FormRow
          label="First Name"
          error={errors?.firstName?.message && errors.firstName.message}
        >
          <Input
            type="text"
            id="firstName"
            {...register("firstName", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow
          label="Last Name"
          error={errors?.lastName?.message && errors.lastName.message}
        >
          <Input
            type="text"
            id="lastName"
            {...register("lastName", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow
          label="Email Address"
          type="fullRow"
          error={errors?.email?.message && errors.email.message}
        >
          <Input
            type="email"
            id="emailAddress"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email address",
              },
            })}
          />
        </FormRow>

        <FormRow
          label="Query Type"
          error={errors?.query?.message && errors.query.message}
        >
          <BorderedDiv>
            <Input
              type="radio"
              name="query"
              id="general"
              {...register("query", { required: "Please select a query type" })}
            />
            General Enquiry
          </BorderedDiv>
        </FormRow>
        <FormRow>
          <BorderedDiv>
            <Input
              type="radio"
              name="query"
              id="support"
              {...register("query", { required: "Please select a query type" })}
            />
            Support Request
          </BorderedDiv>
        </FormRow>

        <FormRow
          label="Message"
          type="fullRow"
          error={errors?.message?.message && errors.message.message}
        >
          <Textarea
            type="text"
            id="message"
            {...register("message", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow
          label="I consent to being contacted by
        the team"
          type="specialFullRow"
          error={errors?.consent?.message && errors.consent.message}
        >
          <Input
            type="checkbox"
            id="consent"
            {...register("consent", {
              required:
                "To submit this form, please consent to being contacted",
            })}
          />
        </FormRow>

        <Button type="fullRow">Submit</Button>
      </Form>
    </>
  );
}

export default FormGroup;
