import { shallow } from "enzyme";
import Login from "./index";

describe("<Login/>", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toHaveLength(1);
  });
});
