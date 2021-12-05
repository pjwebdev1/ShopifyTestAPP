import { Page, Button, Card, Stack, Badge, Thumbnail } from "@shopify/polaris";

const Index = () => (
<Page
title="General"
divider={true} fullWidth={true} narrowWidth={true}
primaryAction={
<Button primary connectedDisclosure={{
  accessibilityLabel: 'Other save actions',
  actions: [{ content: 'Save as new' }]
}}>Save</Button>}

titleMetadata={<Badge status="success">Paid</Badge>}
thumbnail={
	<Thumbnail
		source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
		alt="Black leather pet collar"
	/>
}
>
<p>Page content</p>



<Card sectioned title="Fulfill order">
    <Stack alignment="center">
      <Stack.Item fill>
        <p>Buy postage and ship remaining 2 items</p>
      </Stack.Item>
      <Button primary>Continue</Button>
    </Stack>
  </Card>

</Page>
);

export default Index;
