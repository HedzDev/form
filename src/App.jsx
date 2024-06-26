import { Toaster } from "react-hot-toast";
import AppLayout from "./components/AppLayout";
import FormGroup from "./components/FormGroup";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppLayout>
        <FormGroup />
      </AppLayout>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },

          style: {
            fontSize: "16px",
            padding: "16px 24px",
            maxWidth: "500px",
            backgroundColor: "var(--color-grey-900)",
            color: "var(--color-grey-500)",
          },
        }}
      />
    </>
  );
}

export default App;
