"use strict";

document.addEventListener("DOMContentLoaded", function () {

    // Function to initialize DataTable with custom configurations
    function initializeDataTable(tableId, bulkActionId) {
        const dataTable = new simpleDatatables.DataTable(tableId, {
            columns: [
                // Disable sorting on the first column if needed
                //{ select: [0], sortable: false },
            ],
            perPage: 5,
        });

        // Add Bulk Actions Select & Bootstrap styles to the elements in the header
        dataTable.on("datatable.init", function () {
            const select = document.getElementById(bulkActionId);
            const header = document.querySelector(
                `${tableId} .dataTable-top .dataTable-dropdown`
            );

            header.prepend(select);

            const input = document.querySelector(`${tableId} .dataTable-input`);
            input.classList.add("form-control", "form-control-sm");

            const dataTableSelect = document.querySelector(`${tableId} .dataTable-selector`);
            dataTableSelect.classList.add("form-select", "form-select-sm");

            const dataTableContainer = document.querySelector(`${tableId} .dataTable-container`);
            dataTableContainer.classList.add("border-0");
        });

        // Fade in after init
        dataTable.on("datatable.init", function () {
            document
                .querySelector(tableId)
                .closest(".preload-wrapper")
                .classList.add("opacity-10");
        });

        return dataTable;
    }

    // Initialize the first DataTable
    const ordersDataTable = initializeDataTable("#ordersDatatable", "categoryBulkActionOrders");

    // Initialize the second DataTable (example: #productsDatatable)
    const ordersDatatable2 = initializeDataTable("#ordersDatatable2", "categoryBulkActionProducts");

});
