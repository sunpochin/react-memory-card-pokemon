import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(
		/請試著點擊還沒有點過的卡片，加 1 分。若點擊到已經點過的卡片，則遊戲結束/i
	);
  expect(linkElement).toBeInTheDocument();
});
