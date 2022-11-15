import { Page } from "src/app/order-approval/show-approval-details-modal/show-approval-details-modal.page";


/**
 * An array of data with an associated page object used for paging
 */
export class PagedData<T> {
  data = new Array<T>();
  page = new Page();
}