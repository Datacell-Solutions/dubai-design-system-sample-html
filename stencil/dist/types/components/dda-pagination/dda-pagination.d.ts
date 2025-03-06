export declare class DdaPagination {
    total_pages: number;
    current_page: number;
    type: 'simple-slider' | 'buttons' | 'text' | 'text-pages' | 'button-text' | 'buttons-pages' | 'full';
    custom_class: string;
    component_mode?: string;
    validateTotalPages(newValue: number): void;
    validateCurrentPage(newValue: number): void;
    componentWillLoad(): void;
    private renderPagination;
    private renderPageButtons;
    private setcurrentpage;
    render(): any;
}
