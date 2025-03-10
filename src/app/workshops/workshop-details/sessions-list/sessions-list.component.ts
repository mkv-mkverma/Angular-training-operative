import { Component } from '@angular/core';
import ISession from '../../models/ISession';
import { SessionService } from '../../session.service';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { VotingWidgetComponent } from '../../../common/voting-widget/voting-widget.component';

@Component({
  selector: 'app-sessions-list',
  standalone: true,
  imports: [VotingWidgetComponent],
  templateUrl: './sessions-list.component.html',
  styleUrl: './sessions-list.component.scss',
})
export class SessionsListComponent {
  workshopId!: number;
  sessions!: ISession[];
  destroy$ = new Subject<void>();

  constructor(
    private sessionService: SessionService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.activatedRoute.snapshot.paramMap is NOT an observable unlike this.activatedRoute.paramMap which is an observable
    const idStr = this.activatedRoute.snapshot.paramMap.get('id');
    this.workshopId = +(idStr as string);

    console.log(idStr);

    this.sessionService
      .fetchSessionsForWorkshop(this.workshopId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (sessions) => {
          this.sessions = sessions;
        },
      });
  }

  updateVote(session: ISession, by: number) {
    this.sessionService
      .voteForSession(session.id, by === 1 ? 'upvote' : 'downvote')
      .subscribe({
        next: (updatedSession) => {
          session.upvoteCount = updatedSession.upvoteCount;
        },
        // @todo handle error
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
