import { render, screen } from '@testing-library/react';
import SocialNetworkApp from './App';
import ProfileStatus from './components/Profile/ProfileInfo/ProfileStatus';

test('renders learn react link', () => {
  render(<SocialNetworkApp />);
});

describe("Profile Component", () => {
  test("status from props should be in state", () => {
    render(<ProfileStatus status="123" />);
    const statusElem = screen.getByText(/123/i);
    expect(statusElem).toBeInTheDocument();
  });
});
