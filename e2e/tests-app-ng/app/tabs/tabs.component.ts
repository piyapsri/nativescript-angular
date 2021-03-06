import { Component, OnInit } from "@angular/core";

@Component({
  selector: "tabs-component",
  template: `
<Tabs #tabs>

  <TabStrip>

    <TabStripItem title="TabStripItem 0" iconSource="res://icon">
    </TabStripItem>

    <TabStripItem>
      <Label text="TabStripItem 1">
      </Label>
      <Image src="res://icon">
      </Image>
    </TabStripItem>

    <TabStripItem title="TabStripItem X" iconSource="res://x">
      <Label text="TabStripItem 2">
      </Label>
      <Image src="res://icon">
      </Image>
    </TabStripItem>

  </TabStrip>

  <TabContentItem>
    <StackLayout>
      <Label text="TabContentItem 0">
      </Label>
      <Button (tap)="goTo(tabs, 1)" text="go to 1">
      </Button>
    </StackLayout>
  </TabContentItem>

  <TabContentItem>
    <StackLayout>
      <Label text="TabContentItem 1">
      </Label>
      <Button (tap)="goTo(tabs, 2)" text="go to 2">
      </Button>
    </StackLayout>
  </TabContentItem>

  <TabContentItem>
    <StackLayout>
      <Label text="TabContentItem 2">
      </Label>
      <Button (tap)="goTo(tabs, 0)" text="go to 0">
      </Button>
    </StackLayout>
  </TabContentItem>

</Tabs>
  `,
})

export class TabsComponent implements OnInit {

  public ngOnInit(): void { }

  goTo(tabs: any, index: number) {
    tabs.selectedIndex = index;
  }

}
