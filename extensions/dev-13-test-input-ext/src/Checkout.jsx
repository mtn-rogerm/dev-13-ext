import {
  reactExtension,
  useApplyMetafieldsChange,
  useMetafield,
  TextField
} from '@shopify/ui-extensions-react/checkout';
import React from "react";

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const METAFIELD_NAMESPACE = "CUSTOM_INPUT_APP";
  const METAFIELD_KEY = "custom_text";

  const updateMetafield = useApplyMetafieldsChange();

  const customInput = useMetafield({
    namespace: METAFIELD_NAMESPACE,
    key: METAFIELD_KEY,
  });

  const handleFieldChange = (value) => {
    updateMetafield({
      type: "updateMetafield",
      namespace: METAFIELD_NAMESPACE,
      key: METAFIELD_KEY,
      valueType: "string",
      value: value,
    });
  };

  return (
    <TextField
      label="Custom Input"
      value={customInput?.value}
      onChange={handleFieldChange}
    />
  );
}
