import { NgModule } from '@angular/core';
import { RoundPipePipe } from './round-pipe.pipe';
import { OrderbyPipe } from './orderby.pipe';
@NgModule({
declarations: [RoundPipePipe,OrderbyPipe],
imports: [],
exports: [RoundPipePipe,OrderbyPipe],
})

export class PipesModule {}