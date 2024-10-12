import SubmitButton from "@/app/_components/SubmitButton";
import { updateBooking } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const { bookingId } = params;
  const { numGuests, observations, cabinId } = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(cabinId);

  //  {
  //   id: 698,
  //   created_at: '1973-10-04T00:34:00+00:00',
  //   startDate: '2024-10-08T11:46:00',
  //   endDate: '2024-10-10T09:07:00',
  //   numNights: 2,
  //   numGuests: 1,
  //   cabinPrice: 900,
  //   extraPrice: 200,
  //   totalPrice: 1100,
  //   status: 'checked-out',
  //   hasBreakfast: true,
  //   isPaid: true,
  //   observations: 'Voluptatem Aperiam ',
  //   cabinId: 176,
  //   guestId: 545
  // }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-accent-400 mb-7">
        Edit Reservation #{bookingId}
      </h2>

      <form
        action={updateBooking}
        className="flex flex-col gap-6 px-12 py-8 text-lg bg-primary-900"
      >
        <div className="space-y-2">
          <input type="hidden" name="bookingId" value={bookingId} />

          <label htmlFor="numGuests">How many guests?</label>
          <select
            defaultValue={numGuests}
            name="numGuests"
            id="numGuests"
            className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            defaultValue={observations}
            name="observations"
            className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          <SubmitButton pendingLabel="Updating...">
            Update reservation
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
