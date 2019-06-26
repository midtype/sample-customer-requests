import { gql } from 'apollo-boost';
import ISSUE_FRAGMENT, { IIssue } from './issueFragment';

export default gql`
  mutation CreateIssue(
    $userId: UUID!
    $type: String!
    $topicId: UUID!
    $summary: String!
    $body: String!
  ) {
    createIssue(
      input: {
        issue: {
          reporterId: $userId
          type: $type
          topicId: $topicId
          summary: $summary
          body: $body
        }
      }
    ) {
      issue {
        ...IssueFragment
        __typename
      }
    }
  }
  ${ISSUE_FRAGMENT}
`;

export interface ICreateIssue {
  issue: IIssue;
}
