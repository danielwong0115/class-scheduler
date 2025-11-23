type Quarter = 'Fall' | 'Winter' | 'Spring';

interface QuarterSelectorProps {
  selection: Quarter;
  setSelection: (quarter: Quarter) => void;
}

const quarters: Quarter[] = ['Fall', 'Winter', 'Spring'];

const QuarterButton = ({ quarter, selection, setSelection }: QuarterSelectorProps & { quarter: Quarter }) => (
  <div>
    <input
      type="radio"
      id={quarter}
      checked={quarter === selection}
      autoComplete="off"
      onChange={() => setSelection(quarter)}
    />
    <label
      htmlFor={quarter}
      className="btn btn-success mb-1 p-2"
      data-cy={quarter}
    >
      {quarter}
    </label>
  </div>
);

const QuarterSelector = ({ selection, setSelection }: QuarterSelectorProps) => (
  <div className="flex space-x-2">
    {quarters.map((quarter) => (
      <QuarterButton key={quarter} quarter={quarter} selection={selection} setSelection={setSelection} />
    ))}
  </div>
);

export default QuarterSelector;
