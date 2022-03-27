import { shallow } from "enzyme";
import Tasks from "./index";

describe("<Tasks/>", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Tasks />);
    expect(wrapper).toHaveLength(1);
  });
});
