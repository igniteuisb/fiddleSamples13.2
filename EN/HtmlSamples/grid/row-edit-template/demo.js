$(function () {

            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'    
            var apiViewer = new $.ig.apiViewer();


            var titles = ["Sales Representative", "Sales Manager", "Inside Sales Coordinator", "Vice President, Sales"];
            var countries = ["UK", "USA"];

            /*----------------- Event Examples -------------------------*/

            $("#grid").on("iggridupdatingroweditdialogopened", function (evt, ui) {
                var currDataRow = ui.dialogElement.data('tr');
                var message = "rowEditDialogOpened event was fired with cell values: ";
                for (var i = 0; i < currDataRow[0].cells.length; i++) {
                    message += " <br/>" + $(currDataRow[0].cells[i]).text();
                }
                apiViewer.log(message);
            });

            /*----------------- Instantiation -------------------------*/
            $("#grid").igGrid({
                virtualization: false,
                autoGenerateColumns: false,
                renderCheckboxes: true,
                primaryKey: "EmployeeID",
                columns: [{
                    // note: if primaryKey is set and data in primary column contains numbers,
                    // then the dataType: "number" is required, otherwise, dataSource may misbehave
                    headerText: "Employee ID", key: "EmployeeID", width: "100px", dataType: "number"
                }, {
                    headerText: "First Name", key: "FirstName", width: "100px"
                }, {
                    headerText: "Last Name", key: "LastName", width: "100px"
                }, {
                    headerText: "Title", key: "Title", width: "130px"
                }, {
                    headerText: "Birth Date", key: "BirthDate", width: "100px", dataType: "date"
                }, {
                    headerText: "Postal Code", key: "PostalCode", width: "100px", dataType: "number"
                }, {
                    headerText: "Country", key: "Country", width: "50px", dataType: "string"
                }
                ],
                dataSource: northwind,
                dataSourceType: "json",
                responseDataKey: "results",
                width: "740px",
                height: "100%",
                tabIndex: 1,
                features: [
                    {
                    name: "Selection",
                    mode: "row"
                    },
                    {
                    name: "Updating",
                    enableAddRow: false,
                    editMode: "rowedittemplate",
                    rowEditDialogWidth: 350,
                        rowEditDialogHeight: '430',
                        rowEditDialogContentHeight: 300,
                    rowEditDialogFieldWidth: 150,
                    rowEditDialogOkCancelButtonWidth: 110,
                        rowEditDialogContainment: "owner",
                    rowEditDialogRowTemplateID: "rowEditDialogRowTemplate1",
                    enableDeleteRow: false,
                    showReadonlyEditors: false,
                        showDoneCancelButtons: true,
                    enableDataDirtyException: false,
                        columnSettings: [
                            {
                        columnKey: "EmployeeID",
                        readOnly: true
                    }, {
                        columnKey: "Title",
                        editorType: "text",
                        editorOptions: {
                            button: "dropdown",
                            listItems: titles,
                            readOnly: true,
                            dropDownOnReadOnly: true
                        }
                    }, {
                        columnKey: "Country",
                        editorType: "text",
                        editorOptions: {
                            button: "dropdown",
                            listItems: countries,
                            readOnly: true,
                            dropDownOnReadOnly: true
                        }
                    },
                    {
                        columnKey: "BirthDate",
                        editorType: "datepicker",
                        validation: true,
                        editorOptions: { minValue: new Date(1955, 1, 19), maxValue: new Date(), required: true },
                        validatorOptions: { bodyAsParent: false }
                            }
                        ]
                    }
                ]
            });

        });