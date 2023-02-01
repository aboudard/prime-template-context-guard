import { Directive, Input } from '@angular/core';

interface TableRowTemplateContext<TItem extends object, TColumn extends object> {
  $implicit: TItem;
	columns: TColumn[];
}

@Directive({
  selector: 'ng-template[appTableRow]'
})
export class TableRowDirective<TItem extends object, TColumn extends object> {

  @Input('appTableRow') items!: TItem[];
  @Input() rowColumns!: TColumn[];

  static ngTemplateContextGuard<TContextItem extends object, TContextColumn extends object>(
    dir: TableRowDirective<TContextItem, TContextColumn>,
    ctx: unknown
  ): ctx is TableRowTemplateContext<TContextItem, TContextColumn> {
    return true;
  }

}
