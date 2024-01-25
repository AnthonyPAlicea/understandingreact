import { memo } from 'react';

export const CounterSummaryDetail = memo(function CounterSummaryDetail({ name, total }) {

    //name.shortName = name.shortName + ':'; // different delimiters for different
    const cName = {...name, shortName: name.shortName + ':'};
    
    return (
        <p>{cName.shortName} ({total})</p>
    )
});