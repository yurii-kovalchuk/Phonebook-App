import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { changeValue } from 'redux/filter/slice';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const updateFilter = e => {
    dispatch(changeValue(e.target.value));
  };

  return (
    <div>
      <Label>
        Find contacts by name
        <Input value={filter} onChange={updateFilter} />
      </Label>
    </div>
  );
};
