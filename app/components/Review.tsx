import { Star2 } from '../icons/Star2'

export default function Review() {
	return (
		<div className="text-body flex flex-col gap-2">
          <div className="flex flex-row gap-4 items-center w-full justify-center mb-3">
            <Star2 className="star" color="#8591FF" />
            <Star2 className="star" color="#8591FF" />
            <Star2 className="star" color="#8591FF" />
            <Star2 className="star" color="#8591FF" />
            <Star2 className="star" color="#8591FF" />
          </div>
          <p className="text-center">
            “In amet turpis eget donec bibendum sit congue cras. Fusce parturient pulvinar non a nulla dictum sit
            facilisi aliquet. Posuere tortor egestas orci vel. Ut nulla amet eget habitasse donec urna est iaculis
            tellus. Vitae morbi lorem suscipit fermentum et.”
          </p>
          <div className="font-bold">
            <p>Craig Craigford, Store Owner</p>
            <p>June 2023</p>
          </div>
      </div>
	)
}
