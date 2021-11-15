import { Component, Input } from '@angular/core';
import { Book } from './../../../../models/book';

@Component({
  selector: 'cb-modal',
  template: `
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">{{active?.title}}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                {{active?.description}}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
  `,
  styles: [
  ]
})
export class ModalComponent {
  @Input() active: Book
}
