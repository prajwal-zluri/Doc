"use client";
import { useState } from "react";
function TextArea(props: any) {
  return <textarea style={{ border: "1px solid black" }} {...props} />;
}
function Migration() {
  const [filters, setFilters] = useState<any>([]);
  const [columns, setColumns] = useState({});
  const [groupUI, setGroupUI] = useState<any>({});

  function handleGenerate() {
    const columnIds = Object.keys(columns);

    const formatted = columnIds?.reduce((obj, columnId) => {
      const uiData = groupUI?.[columnId];
      if (!uiData) {
        console.log(`"ui" not available for column ${columnId}`);
        return obj;
      }

      const ui = {
        emptyComponent: uiData.emptyComponent,
        editComponent: uiData.editComponent,
        component: uiData.component,
      };

      const column = columns[columnId];
      const columnName = uiData.header;

      const probablyFilterByObject = filters
        .filter(
          (f) =>
            f.field_name === columnName ||
            f.field_id === uiData?.component?.valueKey
        )
        ?.map((f) => ({
          ...f,
          is_sortable: undefined,
          sort_default_value: undefined,
          is_field_static: undefined,
          is_filterable: undefined,
          editable: undefined,
          draggable: undefined,
          negative: f.negative ? f.negative : undefined,
        }));

      const sortKey =
        column.sort_key ?? column.sortKey ?? uiData.sort_key ?? uiData.sortKey;
      const exportKeyArrayOrNoArray =
        column.export_key ??
        column.exportKey ??
        uiData.export_key ??
        column.exportKey ??
        sortKey;

      const exportKey = Array.isArray(exportKeyArrayOrNoArray)
        ? exportKeyArrayOrNoArray[0]
        : exportKeyArrayOrNoArray;

      const isSortable = column.is_sortable ?? !!sortKey;

      if (isSortable && sortKey !== exportKey) {
        console.log(
          `"exportKey" is supposed to be same as "sortKey" for column ${columnId}. We will replace this entirely with "primary_key" in future`
        );
      }
      return {
        ...obj,
        [columnId]: {
          name: uiData.header,
          group_name: uiData.name,
          column_description: uiData.columnDescription,
          field_ids: column.field_ids,
          default_locked: column.defaultLocked ?? uiData.defaultLocked,
          primary_key: sortKey ?? exportKey,
          is_sortable: isSortable,
          sort_key: sortKey,
          export_key: exportKey,
          filter_by: probablyFilterByObject,
          ui,
        },
      };
    }, {});

    console.log("formatted", formatted);
  }
  return (
    <>
      <p>Existing Filters</p>
      <TextArea
        onChange={(e) => {
          function convertToJson(inputText) {
            // Replace single quotes with double quotes
            let formattedText = inputText.replace(/'/g, '"');

            // Replace key-value pairs without quotes around keys (e.g., field_name: 'Status')
            formattedText = formattedText.replace(
              /([a-zA-Z0-9_]+)\s*:/g,
              '"$1":'
            );
            console.log("formattedText", formattedText);
            const ddd = formattedText.replace(/,(\s*[\]}])/g, "$1");

            // Try to parse the formatted text as JSON
            try {
              const jsonData = JSON.parse(ddd);
              console.log("Valid JSON correct:", jsonData);
            } catch (error) {
              console.error("Invalid JSON:", error);
            }
          }
          convertToJson(e.target.value);
        }}
      />

      <p>Existing Columns</p>
      <TextArea onChange={(e) => setColumns(JSON.parse(e.target.value))} />

      <p>Existing Group UI</p>
      <TextArea onChange={(e) => setGroupUI(JSON.parse(e.target.value))} />

      <button onClick={() => {}}>Generate</button>
    </>
  );
}
export default Migration;
