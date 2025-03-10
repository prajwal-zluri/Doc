---
title: API
description:
  Nextra is a framework built on top of Next.js that enables the creation of
  content-focused websites. It combines the robust features of Next.js with
  enhanced capabilities for crafting Markdown-based content.
---

import { Cards, Image } from "nextra/components";
import { cloneElement } from "react";

export default function MdxLayout(props) {
return cloneElement(props.children, {
components: {
img: Image,
},
});
}

# API

Implements IV2Table interface.

```typescript
{
	apiProps?: any;

	columnMinWidth?: number;
	cellProps?: AnyObject;

	dataFreshnessEntity?: DataFreshnessEntityType;
	disableScheduledExport?: boolean;
	disableSort?: boolean;
	disableUrlSync?: boolean;

	enableBulkEdit?: boolean;
	// --> This is deprecated just to make sure that no one uses this prop without additional information
	/**
	 * Since Bulk Update curenlcy only works for Application main table only
	 * and the component used is just dummy copy of v1.
	 * If needed to be used whatever exists right now for users then go to context.tsx
	 * and the update the `screen` value to use `User` for users table and `Application` for Application table
	 * @deprecated Only use this in application main table for now
	 * Remove this Deprecate sign once v2 bulk update is made correctly functional.
	 */
	enableBulkUpdate?: boolean;
	enableCacheRestore?: boolean;
	enableColumnLevelFilter?: boolean;
	enablePlaybook?: boolean;
	enableViews?: boolean;
	entity: TableEntityType;
	entityId?: string;
	exportEntity?: ExportEntityType;

	hideColumnModifier?: boolean;
	hideCustomExport?: boolean;
	hideExportAsCSV?: boolean;
	hideExportCSVForExcel?: boolean;
	hideFilters?: boolean;
	hideOptionsMenu?: boolean;
	hidePagination?: boolean;
	hideSearch?: boolean;
	hideQuickFilters?: boolean;

	idProperty?: string; // => The key identifier of the data. eg. "_id" | "id"

	/**
	 * @deprecated Do not use this yet -> Requires some confidence to make this globally available
	 */
	onBulkEdit?: (props: { payload: IBulkEditPayload; menu: any }) => void;
	onCellUpdate?: OnCellUpdateType;
	onRowReorder?: TypeRowReorderFn;
	onSelectionChange?: (d: any) => void; // TODO:

	renderAddComponent?: () => React.ReactNode;
	renderCustomBulkEditConfirmationPopup?: (d: any) => React.ReactNode; // TODO:
	renderCustomCheckbox?: (arg: {
		handleChange: (arg: any) => void;
		checked: boolean;
		disabled: boolean;
		cellProps: any;
	}) => React.ReactNode;
	renderDynamicController?: () => React.ReactNode;
	renderEmptyState?: (d: any) => React.ReactNode; // TODO:
	renderInformationBanner?: () => React.ReactNode;

	subEntityData?: ISubEntityData; // TODO:

	textMap?: ITextMap;

	virtualizeColumns?: boolean;

	// --> all below props intended to be removed or checking and verifying
	/**
	 * @deprecated Do not use this
	 */
	disabledUnselectedItems?: string[];
	/**
	 * @deprecated Do not use this. Try using textMap prop instead
	 */
	emptyMessage?: string;
	enableRowReOrdering?: boolean;
	exportAllColumns?: boolean;
	forceInfinite?: boolean;
	headerContent?: React.JSX.Element;
	/**
	 * @deprecated Do not use this.
	 */
	hideActionFilters?: boolean;
	/**
	 * @deprecated Do not use this. Try using entityId instead
	 */
	intID?: any;
	mandatoryExportFieldId?: string;
	/**
	 * @deprecated Do not use this. Try using textMap prop instead
	 */
	paginationEntity?: string;
	renderRowReorderProxy?: any;
	showCheckboxColumn?: boolean;
	scheduleExportName?: string;
	/**
	 * @deprecated Do not use this. Try using textMap prop instead
	 */
	searchPlaceholderText?: string;
	/**
	 * @deprecated Do not use this. Try using textMap prop instead
	 */
	selectAllText?: string;
	quickfiltersmockdata?: IV2QuickFilter[];
}


```

### `apiProps`

> type: <b>any</b> <br/>
> default: <b>undefined</b>

An optional object that allows passing additional parameters or configurations to the API request. This object will be accessible in the functions that make the API call.

### `columnMinWidth`

> type: <b>number (in pixel)</b> <br/>
> default: <b>150</b>

Specifies the default minimum width of a column. If a component's minWidth property is set in the property file, it will override this value.

### `cellProps`

> type: <b>AnyObject</b> <br/>
> default: <b>undefined</b>

An optional object used to pass additional configurations or information to cell components. This property is available across all components from its prop in the component factory, allowing them to access and utilize the provided data as needed.

### `dataFreshnessEntity`

> type: <b>DataFreshnessEntityType</b> <br/>
> default: <b>undefined</b>

An optional string used to fetch data for the Data Freshness widget, which appears at the bottom right of the table. The entity provided is used as a parameter in this API call `/v2/organization/:orgId/data-freshness` by the v2Table to fetch and render the data freshness widget

### `disableScheduledExport`

> type: <b>boolean</b> <br/>
> default: <b>false</b>

An optional boolean used to disable scheduled export in the v2Table custom export sidesheet.

### `disableSort`

> type: <b>boolean</b> <br/>
> default: <b>false</b>

An optional boolean used to disable sorting behavior across all columns in the v2Table. Column-level sorting can be controlled via the [is_sortable](/docs/property-file#is_sortable) flag in the property file. If `disableSort` is set as false, then this overrides all the column-level sorting.

### `disableUrlSync`

> type: <b>boolean</b> <br/>
> default: <b>false</b>

By default, all actions applied to the v2Table are synced to the URL. When multiple v2Tables exist in the application, it's recommended to enable URL syncing for only one table to avoid potential bugs. This setting is especially useful for tables rendered in sidesheets.

### `enableBulkEdit` @TODO

> type: <b>boolean</b> <br/>
> default: <b>undefined</b>

### `enableBulkUpdate` @TODO

> type: <b>boolean</b> <br/>
> default: <b>false</b>

This is deprecated just to make sure that no one uses this prop without additional information. Since Bulk Update currently only works for the Application main table, and the component used is just a dummy copy of v1. If needed to be used whatever exists right now for users then go to context.tsx and update the `screen` value to use `User` for users table and `Application` for the Application table. Only use this in the application main table for now. Remove this deprecate sign once v2 bulk update is made correctly functional.

### `enableCacheRestore` @TODO

> type: <b>boolean</b> <br/>
> default: <b>false</b>

### `enableColumnLevelFilter` @TODO

> type: <b>boolean</b> <br/>
> default: <b>undefined</b>

### `enablePlaybook` @TODO

> type: <b>boolean</b> <br/>
> default: <b>undefined</b>

### `enableViews` @TODO

> type: <b>boolean</b> <br/>
> default: <b>undefined</b>
> Required:false

### `entity` @TODO

> type: <b>string</b> <br/>
> default: <b>undefined</b> <br/>
> Required

### `entityId` @TODO

> type: <b>string</b> <br/>
> default: <b>undefined</b> <br/>
> Required: true

### `exportEntity` @TODO

> type: <b>ExportEntityType</b> <br/>
> default: <b>undefined</b> <br/>

### `hideColumnModifier`

> type: <b>boolean</b> <br/>
> default: <b>undefined</b> <br/>

Specifies whether to hide the column Modifier sidesheet trigger button from the UI. This is only recommended if there are fewer columns.

### `hideCustomExport`

> type: <b>boolean</b> <br/>
> default: <b>undefined</b> <br/>

Specifies whether to hide the Custom Export option from the options menu.

### `hideExportAsCSV` @TODO

> type: <b>boolean</b> <br/>
> default: <b>undefined</b> <br/>

### `hideExportCSVForExcel` @TODO

> type: <b>boolean</b> <br/>
> default: <b>undefined</b> <br/>

[TODO: Need to clarify why Excel export is required]
v2Table offers options to export data as plain CSV or CSV for Excel. If hideExportAsCSV is set to false, this flag becomes redundant. It’s recommended not to use this flag.

### `hideFilters`

> type: <b>boolean</b> <br/>
> default: <b>false</b> <br/>

Specifies whether to hide the filter controller from the UI.

### `hideOptionsMenu`

> type: <b>boolean</b> <br/>
> default: <b>false</b> <br/>

Controls the visibility of the options menu (the Kebab menu) in the top-right corner of the v2Table. The options menu includes:

- Refresh: Immediately refreshes the table
- View Density: Adjusts the row height (density) of the table
- Export View: Exports the current table view
- Custom Export: Opens the custom export sidesheet

Setting this to true hides all these features. It’s not recommended to hide this menu, as tables typically require the refresh and density selector options.

### `hidePagination`

> type: <b>boolean</b> <br/>
> default: <b>false</b> <br/>

Specifies whether to hide the pagination controller from the UI. When set to true, the pagination controls will not be displayed.

### `hideSearch`

> type: <b>boolean</b> <br/>
> default: <b>false</b> <br/>

Specifies whether to hide the search bar. When set to true, the search bar will be hidden from the UI.

### `hideQuickFilters` @TODO

> type: <b>boolean</b> <br/>
> default: <b>undefined</b> <br/>

### `idProperty`

> type: <b>string</b> <br/>
> default: <b>\_id</b> <br/>

The main identifier for the data, typically set to \_id. It’s recommended not to change this. If you must change, then care must to taken to use the idenfier which uniquely identify each row. Using a non-unique identifier can lead to bugs.

### `onBulkEdit` @TODO

> type: <b>string</b> <br/>
> default: <b>undefined</b> <br/>
> Deprecated

### `onCellUpdate` @TODO

> type: <b>OnCellUpdateType</b> <br/>
> default: <b>undefined</b> <br/>

### `onRowReorder` @TODO

> type: <b>TypeRowReorderFn</b> <br/>
> default: <b>undefined</b> <br/>

### `onSelectionChange` @TODO

> type: <b> (d: any) => void</b> <br/>
> default: <b>undefined</b> <br/>

### ` selectAllText`

> type: <b> string</b> <br/>
> default: <b>undefined</b> <br/>
> Deprecated

Uset [textMap](#textMap) instead.

### `virtualizeColumns` @TODO

> type: <b> boolean</b> <br/>
> default: <b>undefined</b> <br/>
> Deprecated

### `renderAddComponent` @TODO

> type: <b> () => React.ReactNode;</b> <br/>
> default: <b>undefined</b> <br/>

### `renderCustomBulkEditConfirmationPopup` @TODO

> type: <b> () => React.ReactNode;</b> <br/>
> default: <b>undefined</b> <br/>

### `renderCustomCheckbox` @TODO

> type: (arg: \{handleChange: (arg: any) => void;checked: boolean;disabled: boolean;cellProps: any; \}) => React.ReactNode; <br/>
> default: <b>undefined</b> <br/>

### `renderDynamicController` @TODO

> type: <b> () => React.ReactNode;</b> <br/>
> default: <b>undefined</b> <br/>

### `renderEmptyState` @TODO

> type: <b> () => React.ReactNode;</b> <br/>
> default: <b>undefined</b> <br/>

### `renderInformationBanner` @TODO

> type: <b> () => React.ReactNode;</b> <br/>
> default: <b>undefined</b> <br/>

### `subEntityData` @TODO

> type: <b>ISubEntityData</b> <br/>
> default: <b>undefined</b> <br/>

### `textMap`

> type: <b>ITextMap</b> <br/>
> default: <b>undefined</b> <br/>

**Structure**

```typescript
interface ITextMap {
  default: string;
  defaultPlural?: string;
  searchPlaceholder?: string;
  selectionText?: string;
  emptyMessage?: string;
  appliedSearchLabel?: string;
  pagination?: string;
  paginationPlural?: string;
  tabName?: string;
  tableName?: string;
}
```

This object is used to pass in all the displayable text in v2Table.

- default: Default fallback text for all displayable text in the table. This is required.
- defaultPlural: Default fallback text for all plural displayable text in the table.This is required.
- searchPlaceholder: Placeholder text in the search bar. Defaults to "default" text if not provided. (In legacy, [searchPlaceholderText](#searchPlaceholderText) will be shown if searchPlaceholder is not available in textMap).
- pagination: Text for the pagination controller. Defaults to "default" text if not provided. (In legacy, [`paginationEntity`](#paginationEntity will be shown if pagination is not available in textMap).
- paginationPlural: Plural version of the pagination text, used when the text needs to be plural. Defaults to defaultPlural if not provided.

### `disabledUnselectedItems` @TODO

> type: <b>string[]</b> <br/>
> default: <b>undefined</b> <br/>
> Deprecated

### `emptyMessage` @TODO

> type: <b>string</b> <br/>
> default: <b>undefined</b> <br/>
> Deprecated

### `enableRowReOrdering` @TODO

> type: <b>boolean</b> <br/>
> default: <b>undefined</b> <br/>
> Deprecated

### `exportAllColumns` @TODO

> type: <b>boolean</b> <br/>
> default: <b>false</b> <br/>
> Deprecated

### `forceInfinite` @TODO

> type: <b>boolean</b> <br/>
> default: <b>undefined</b> <br/>
> Deprecated

### `headerContent` @TODO

> type: <b>React.JSX.Element</b> <br/>
> default: <b>undefined</b> <br/>
> Deprecated

### `hideActionFilters` @TODO

> type: <b>React.JSX.Element</b> <br/>
> default: <b>undefined</b> <br/>
> Deprecated

### `intID` @TODO

> type: <b>any</b> <br/>
> default: <b>undefined</b> <br/>
> Deprecated

### `mandatoryExportFieldId` @TODO

> type: <b>string</b> <br/>
> default: <b>undefined</b> <br/>
> Deprecated

### `paginationEntity` @TODO

> type: <b>string</b> <br/>
> default: <b>undefined</b> <br/>
> Deprecated

Use [textMap](#textMap) instead.

### `renderRowReorderProxy` @TODO

> type: <b>any</b> <br/>
> default: <b>undefined</b> <br/>
> Deprecated

### `showCheckboxColumn`

> type: <b>boolean</b> <br/>
> default: <b>true</b> <br/>

This flag controls the visibility of the checkbox column. The checkbox column is required for triggering actions like bulk update, bulk edit, bulk actions, and selected exports (in Custom Export, it allows exporting only selected items). If no such actions are available and you want to hide the checkbox, set this flag to false.

### `scheduleExportName` @TODO

> type: <b>string</b> <br/>
> default: <b>undefined</b> <br/>
> Deprecated

### `searchPlaceholderText`

> type: <b>string</b> <br/>
> default: <b>undefined</b> <br/>
> Deprecated

Use [textMap](#textMap) instead

### `quickfiltersmockdata` @TODO

> type: <b>IV2QuickFilter[]</b> <br/>
> default: <b>undefined</b> <br/>
> Deprecated
