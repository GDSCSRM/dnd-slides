import Layout from "~/components/layout";
import List from "~/components/list";

export default function EndNotes() {
  return (
    <Layout title="End Notes">
      <List
        items={[
          "Design the other pages",
          "Color the pages",
          "Make all the pages functional and responsive",
          "Validation: Server side validation using Zod, Yup or Valibot",
          "Other hooks which Remix provides",
        ]}
      />
    </Layout>
  );
}
