function calculatePositionProfit(lastPrice, avgOpenPrice, leverage) {
    if (avgOpenPrice === 0) {
        // Avoid division by zero
        return 0;
    }
    let roi = ((lastPrice - avgOpenPrice) / avgOpenPrice) * leverage * 100;
    return roi.toFixed(2); // Returns the ROI as a string formatted to two decimal places
}
