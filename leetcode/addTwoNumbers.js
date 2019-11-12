// arrays
const addTwoNumbers = (l1, l2) => {
  let sol = [];
  for (let i = 0; i < l1.length; ++i) {
    if (l1[i] + l2[i] < 10) {
      sol.push(l1[i] + l2[i]);
    } else {
      if (i == l1.length - 1) {
        sol.push(l1[i] + l2[i]);
      } else {
        sol.push((l1[i] + l2[i]) % 10);
        l1[i + 1]++;
      }
    }
  }
  return sol;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));

// linked lists
const addTwoNumbers = (l1, l2) => {
  console.log('--------');
  console.log(l1);
  console.log(l2);
  console.log('--------');

  while (l1 !== null) {
    console.log(l1.val);
    let bonus = 0;

    if (sol.val === undefined) {
      if (l1.val + l2.val < 10) {
        const sol = new ListNode(l1.val + l2.val);
      } else {
        const sol = new ListNode((l1.val + l2.val) % 10);
        bonus = 1;
      }
    }

    if (l1.val + l2.val < 10) {
      sol.next = l1.val + l2.val + bonus;
      bonus = 0;
    } else {
      if (l1.next == null) {
        sol.next = new ListNode(l1.val + l2.val);
      } else {
        sol.next = new ListNode((l1.val + l2.val) % 10);
        bonus = 1;
      }
    }

    l1 = l1.next;
    l2 = l2.next;
  }
  console.log(sol);
};
