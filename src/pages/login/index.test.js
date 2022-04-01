import { shallow } from "enzyme";
import { ThemeContext } from "../../ThemeContext";
import Login from "./index";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}));

describe("<Login/>", () => {
  it("should render correctly", () => {
    jest.spyOn(Login, 'useAppContext')
			.mockImplementation(() => ThemeContext);
    const wrapper = shallow(<Login />);
    expect(wrapper).toHaveLength(1);
  });
});
